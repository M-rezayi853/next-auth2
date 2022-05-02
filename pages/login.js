import React, { useEffect } from 'react'
import Router from 'next/router'
import { providers, getSession, csrfToken } from 'next-auth/client'
import { toast } from 'react-toastify'

import OAuth from '../components/auth/OAuth'
import Email from '../components/auth/Email'
import Credentials from '../components/auth/Credentials'

const Login = ({ providers, csrfToken }) => {
  useEffect(() => {
    return async () => {
      if (Router.query.error) {
        toast.error(Router.query.error)
        return Router.push('/login')
      }
    }
  }, [])

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '100vh' }}
    >
      <div
        style={{ maxWidth: '450px', width: '100%' }}
        className='border border-1 max-auto p-4 shadow'
      >
        <h2
          className='text-center fw-bolder text-uppercase'
          style={{ color: '#555', letterSpacing: '1px' }}
        >
          MH77_DEV
        </h2>

        <p className='text-center'>Login with NextAuth</p>

        <Credentials providers={providers} csrfToken={csrfToken} />

        <div className='text-center'>✦ Or ✦</div>

        <OAuth providers={providers} csrfToken={csrfToken} />

        <Email providers={providers} csrfToken={csrfToken} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      providers: await providers(context),
      session: await getSession(context),
      csrfToken: await csrfToken(context),
    },
  }
}

export default Login
