'use client';
import { motion } from 'framer-motion';
export default function Reveal({children,className='',delay=0}:{children:React.ReactNode;className?:string;delay?:number}){return <motion.div className={className} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.65,delay,ease:'easeOut'}}>{children}</motion.div>}
