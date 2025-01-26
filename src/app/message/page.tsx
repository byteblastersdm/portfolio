import { getData } from '@/actions/contact'
import DeleteMessageBtn from '@/components/shared/DeleteMessageBtn'
import React from 'react'

const page = async() => {
    const data = await getData()
    
  return (
    <>
    <section className="container px-4 mx-auto ">
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold leading-tight text-gray-800 text-center my-10">Messages</h2>
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Message
                    </th>
                   

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm  font-bold text-left rtl:text-right text-gray-500 "
                    >
                      Action
                    </th>

                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200  ">

                  {
                    data.length >= 1 && data?.map((elem:any) => {
                      return (
                        <tr key={elem._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">

                              <span className="capitalize">{elem.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">

                              <span>{elem.email}</span>
                            </div>
                          </td>
                          
                          
                          
                          <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">

                              <span>{elem.message} </span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              
                              <DeleteMessageBtn id={elem._id}/>

                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
               {
                data.length === 0 && <tr>
                  <td className='text-center' colSpan={4}>No messages</td>
                </tr>
               }   


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </section>
  </>
  )
}

export default page