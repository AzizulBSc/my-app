'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { loginAction, logoutAction } from '@/actions';

function Header() {
  // console.log(getSession, 'getSession in header');

  // async function handleOauthSignOut() {
  //   await logoutAction();
  // }

  // async function handleOauthSignIn() {
  //   await loginAction();
  // }

  return (
    <header className="p-6 flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href={'/'}>Home</Link>
      </div>
      <ul className="flex gap-6 items-center justify-center mr-10">
        <li className="text-lg font-semibold">
          <Link href={'/products'}>Products</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link href={'/cart'}>Cart</Link>
        </li>
      </ul>
      <div className="flex space-x-3">
        {/* <form
          action={getSession?.user ? handleOauthSignOut : handleOauthSignIn}
        > */}
        <Button type="submit">Login</Button>
        {/* </form> */}
      </div>
    </header>
  );
}

export default Header;