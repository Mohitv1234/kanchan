'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';
export default function SiteHeader() { const [open,setOpen]=useState(false); const links=[['Home','/'],['Gallery','/gallery'],['About','/about'],['Contact','/contact']]; return <header className="site-header"><Link href="/" className="brand"><span className="brand-mark"><Flower2 size={24}/></span><span>Kanchan<small>MEHNDI ARTIST</small></span></Link><nav className={open?'nav-links open':'nav-links'}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact" onClick={()=>setOpen(false)}>Book an appointment <span>↗</span></Link></nav><button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header> }
