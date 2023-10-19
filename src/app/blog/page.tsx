async function getData() {
    const lista = await fetch('http://localhost:3000/api')
   
    return (
        <ul>
          {lista.map((list:any) => (
            <li key={list.id}>{list.name}</li>
          ))}
        </ul>
      )
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData()

    
    return <div></div>
}