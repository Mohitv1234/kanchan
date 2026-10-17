import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
const cookieName = 'kanchan_admin_session';
function secret() { const value = process.env.SESSION_SECRET; if (!value || value.length < 32) throw new Error('SESSION_SECRET must be at least 32 characters'); return new TextEncoder().encode(value); }
export async function createSession(email: string) { const token = await new SignJWT({ email, role: 'admin' }).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('8h').sign(secret()); (await cookies()).set(cookieName, token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 60 * 60 * 8 }); }
export async function destroySession() { (await cookies()).delete(cookieName); }
export async function isAdmin() { try { const token = (await cookies()).get(cookieName)?.value; if (!token) return false; const { payload } = await jwtVerify(token, secret()); return payload.role === 'admin'; } catch { return false; } }
