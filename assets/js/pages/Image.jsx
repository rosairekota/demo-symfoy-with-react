
import React from 'react'

export default function Image({images}) {
  return (
    <>
      
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Url</th>
                <th>CreatedAt</th>
                <th>UpdatedAt</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
          { images.map((image)=>(
             <tr>
             <td>{ image.id }</td>
             <td>{ image.name }</td>
             <td>{ image.url }</td>
             <td>
                 <a>show</a>
                 <a>edit</a>
             </td>
         </tr>
          ))}
         
        </tbody>
    </table>
    </>
  )
}
