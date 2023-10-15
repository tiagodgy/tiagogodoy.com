import { NextResponse } from 'next/server'

export function middleware(req) {
  const res = NextResponse.next()
  res.setHeader('Access-Control-Allow-Origin', 'https://www.tiagogodoy.com')
  return res
}
