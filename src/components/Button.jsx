import Link from 'next/link'
import clsx from 'clsx'

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-indigo-700 font-semibold text-indigo-100 hover:bg-indigo-800 active:bg-indigo-800 active:text-indigo-100/70',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
