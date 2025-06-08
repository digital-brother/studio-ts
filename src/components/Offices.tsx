import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Kyiv" invert={invert}>
          47 Volodymyrska Street
          <br />
          01001, Kyiv, Ukraine
        </Office>
      </li>
      <li>
        <Office name="Khmelnytskyi" invert={invert}>
          26 Starokostiantynivske Road
          <br />
          29001, Khmelnytskyi, Ukraine
        </Office>
      </li>
    </ul>
  )
}
