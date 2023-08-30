import Image from 'next/image'
import MyProfilePic from './components/MyProfilePic'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import "highlight.js/styles/github-dark.css"
export const revalidate = 86400
import Posts from './components/Posts'

export default function Home() {
  return (
    <div className='mx-auto'>
      <MyProfilePic/>
     <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
      Hello and Welcome 👋&nbsp;
      <span className='whitespace-nowrap'>
        I'm <span className='font-bold'>Andrin</span>.
      </span>
     </p>
     <Posts/>
    </div>
  )
}
