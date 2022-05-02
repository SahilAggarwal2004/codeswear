import React, { useContext } from 'react'
import Context from '../../context/Context'

export default function Confirm() {
  const { router, fetchApp } = useContext(Context)
  const { token } = router.query

  async function verify() {
    await fetchApp('auth/confirm', 'PUT', {}, token)
    router.push('/login')
  }

  return (
    <div className='fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] space-y-5 text-center'>
      <h3 className='text-lg font-semibold'>Confirm your CodesWear account</h3>
      <button className='mt-1 text-myorange bg-white border-myorange hover:text-white hover:bg-myorange py-1 px-2 border-[1.5px] rounded-md transition-all duration-300' onClick={verify}>Click Here!</button>
    </div>
  )
}
