
const SectionHeader = ({children}: {children: string}) => {
  return (
    <div className='flex justify-center mb-10 md:mb-20'>
      <h2 className='section-header'>{children}</h2>
    </div>  )
}

export default SectionHeader