const PageTitle = ({ title = 'Header' }: { title: string }) => {
  return (
    <div className="my-5">
      <h2 className="h2-bold mb-4">{title}</h2>
    </div>
  )
}

export default PageTitle
