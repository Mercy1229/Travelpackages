// import { Card, CardDescription, CardFooter } from "./ui/card";
// import { Button } from "./ui/button";

// interface Data {
//     image?:string;
//     title:string;
//     Detail: string;
//     Description: string;
// }
// export default function Container({ data }: { data: Data }) {
//     console.log(data)
//     return (
        
//         <Card className="border border-gray-200 p-4 bg-gray-50 mt-4">
//             <div className="h-52 w-full mt-2">
//                 <img src={data.image} alt={data.title} className="rounded-md h-full w-full object-cover" />
//             </div>
//             <CardDescription className="text-center text-orange-500 mb-2">
//                 <p className="text-xl font-bold">{data.Detail}</p>
//             </CardDescription>
//             <p className="text-gray-600 text-center mb-4">{data.Description}</p>
//             <CardFooter className="flex justify-center">
//                 <Button className="w-full p-2 border-gray-400 bg-slate-500 hover:bg-slate-300 hover:text-black">
//                     Book Now
//                 </Button>
//             </CardFooter>
//         </Card>
//     );
// }
import { Card, CardDescription, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { usePersonStore } from "../store/product";
interface Data {
    image: string;
    title: string;
    Detail: string;
    Description: string;
}
function BookingForm(){
    const firstName = usePersonStore((state) => state.firstName)
    const email = usePersonStore((state) => state.firstName)
    const Destination = usePersonStore((state) => state.firstName)
    
  const updateFirstName = usePersonStore((state) => state.updateFirstName)
  const updateEmail = usePersonStore((state) => state.updateEmail)
  const updateDestination = usePersonStore((state) => state.updateDestination)
  return(
    <form>
        <label>
        First name
        <input
          // Update the "firstName" state
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>
      <label>
        Email
        <input
          // Update the "firstName" state
          onChange={(e) => updateEmail(e.currentTarget.value)}
          value={email}
        />
      </label>
    </form>
    
  )
}

export default function Container({ data }: { data: Data }) {
    return (
        <Card className="border border-gray-200 p-4 bg-gray-50 mt-4 w-1/3 mx-auto">
            <h5 className="text-xl font-bold text-center text-orange-600">{data.title}</h5>
            <div className="h-52 w-full mt-2">
                <img src={data.image} alt={data.title} className="rounded-md h-full w-full object-cover" />
            </div>
            <CardDescription className="text-center text-orange-500 mb-2">
                <p className="text-xl font-bold">{data.Detail}</p>
            </CardDescription>
            <p className="text-gray-600 text-center mb-4">{data.Description}</p>
            <CardFooter className="flex justify-center">
                <Button 
                className="w-full p-2 border-gray-400 bg-slate-500 hover:bg-slate-300 hover:text-black"
                onClick={<BookingForm />}>
                    Book Now
                </Button>
            </CardFooter>
        </Card>
    );
}
