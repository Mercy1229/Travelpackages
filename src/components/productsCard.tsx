
// // function Products({ data }: { data: Data[] }) {
// //     const [isActive, setIsActive] = useState(false);

// //     return (
// //         <>
// //             <div className="w-full mx-auto mb-4">
// //             {isActive && <Container data={data} />}
// //             </div>
// //             <div className="flex flex-row flex-wrap">
// //                 {data.map((data,)=>(
// //                     <Card className="w-1/6 border border-gray-200">
// //                     <CardContent>
// //                         <div className="h-40 w-full mt-2">
// //                             <img src={data.image} alt={data.title} className="rounded-md h-full w-full object-cover" />
// //                         </div>
// //                         <h5 className="font-semibold text-lg text-center">{data.title}</h5>
// //                         <p className="text-gray-700 text-center">${data.price}</p>
// //                     </CardContent>

// //                     <CardFooter className="flex justify-center">
// //                         <Button
// //                             onClick={() => setIsActive(!isActive)}
// //                             className="mt-2 bg-slate-500 hover:bg-slate-300 hover:text-black"
// //                         >
// //                             {isActive ? "Hide Details" : "View Details"}
// //                         </Button>
// //                     </CardFooter>
// //                 </Card>
// //                 ))}
                
// //                 </div>
// //         </>
// //     );
// // }

// // export default Products;
// import { Card, CardContent, CardFooter } from "./ui/card";
// import { Button } from "./ui/button";
// import { useState } from "react";
// import Container from "./productDetailsCard";

// interface Data {
//     id: string;
//     image: string;
//     title: string;
//     price: string;
//     Detail: string;
//     Description: string;
// }

// function Products({ data }: { data: Data[] }) {
//     const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track the active index

//     return (
//         <>
//         <div>
//         {activeIndex === index && <Container data={item} />}
//         </div>

//             <div className="flex flex-row flex-wrap">
//                 {data.map((item, index) => (
//                     <Card key={item.id} className="w-1/4 border border-gray-200 m-2"> {/* Adjust width for 4 cards per row */}
//                         <CardContent>
//                             <div className="h-40 w-full mt-2">
//                                 <img src={item.image} alt={item.title} className="rounded-md h-full w-full object-cover" />
//                             </div>
//                             <h5 className="font-semibold text-lg text-center">{item.title}</h5>
//                             <p className="text-gray-700 text-center">${item.price}</p>
//                         </CardContent>

//                         <CardFooter className="flex justify-center">
//                             <Button
//                                 onClick={() => setActiveIndex(activeIndex === index ? null : index)} // Toggle active index
//                                 className="mt-2 bg-slate-500 hover:bg-slate-300 hover:text-black"
//                             >
//                                 {activeIndex === index ? "Hide Details" : "View Details"}
//                             </Button>
//                         </CardFooter>
//                          {/* Pass single item to Container */}
//                     </Card>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default Products;
import { Card, CardContent, CardDescription, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import Container from "./productDetailsCard";

interface Data {
    id: string;
    image: string;
    title: string;
    price: string;
    Detail: string;
    Description: string;
}

function Products({ data }: { data: Data[] }) {
    const [productActive, setProductActive] = useState<Data | null>(null); 

    return (
        <>
            {productActive && <Container data={productActive} />}

            <div className="flex flex-row flex-wrap w-full gap-4 mt-5">
                {data.map((data) => (
                    <Card key={data.id} className="border border-gray-200 w-1/5 mx-auto"> 
                        <CardContent>
                            <div className="h-40 w-56 mt-2">
                                <img src={data.image} alt={data.title} className="rounded-md h-full w-full object-cover" />
                            </div>
                            </CardContent>
                            <CardDescription>
                            <h5 className="font-semibold text-lg text-center">{data.title}</h5>
                            <p className="text-gray-700 text-center">${data.price}</p>
                        </CardDescription>

                        <CardFooter className="flex justify-center">
                            <Button onClick={() => setProductActive(productActive === data ? null : data)}
                                className="mt-2 bg-slate-500 hover:bg-slate-300 hover:text-black"
                            >
                                {productActive === data ? "Hide Details" : "View Details"}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Products;

