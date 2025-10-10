interface CartHeaderProps {
  itemCount: number
}

export function CartHeader({ itemCount }: CartHeaderProps) {
  return (
    <div className="flex items-baseline justify-between">
      <h1
        className="text-[#27252C] font-medium text-2xl leading-9 tracking-[0.07px]"
        style={{ fontFamily: 'Inter' }}
      >
        Your Cart
      </h1>
      <span
        className="text-[#928EA2] font-normal text-base leading-6 tracking-tight text-right"
        style={{ fontFamily: 'Inter' }}
      >
        {itemCount} item{itemCount !== 1 ? 's' : ''}
      </span>
    </div>
  )
}
