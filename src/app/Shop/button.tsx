import { Button } from "@/components/ui/button"

export function ButtonLink() {
  return(
<div className="flex justify-center mt-[30px] mb-[30px]">
   <Button className="bg-yellow-100 hover:bg-yellow-600" variant="link">1</Button>
   <Button className="bg-yellow-100 hover:bg-yellow-600 ml-4 mr-4" variant="link">2</Button>
   <Button className="bg-yellow-100 hover:bg-yellow-600" variant="link">3</Button>
   <Button className="bg-yellow-100 hover:bg-yellow-600 ml-4" variant="link">NEXT</Button>

   </div>
)
}
