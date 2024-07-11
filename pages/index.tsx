
import { title,  } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";

import {Divider} from "@nextui-org/divider";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

        <Image
          src="/logo.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />

        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Lhakpa Daw</h1>
          <h1 className={title({ color: "violet" })}> Tailoring</h1>
          <br />
          <h1 className={title()}>
            ...Since 1978
          </h1>
    
      <p className="mt-4">
        Lhakpa Daw Tailorings, established in 1987, is a pioneer in traditional ceremonial tents and tensile membrane structures. We mass-produce tailored items like national flags, uniforms, and decorative event items. We are known for our quality and innovation, our skilled craftsmen <span style={{ color: "violet" }}>blend tradition with modern advancements</span> .
      </p>
        </div>

      </section>

      <section>
          <p className="text-center text-3xl font-semibold mt-12 mb-6">
            Our Products
          </p>
          <div className="gap-2 grid grid-cols-12 grid-rows-2 px-8 md:px-12">
           
            <Card className="p-0 col-span-12 sm:col-span-4 min-h-[280px]">
              <CardBody>
                <div className="bg-gray-200 rounded-md" style={{height:"250px",width:"full",backgroundSize:"cover",backgroundImage:"url('https://www2.buddhistdoor.net/upload/file/20160718/9812/b93764b1af0f0f6c7538e98f2f3605ba_715__2.jpg')"}}>
                </div>
                
               <p className="mt-2 text-lg">
                 Standard Rectangular Tent
                </p>
                <p className="text-md mb-2 font-thin">
                  Standard tents with <strong>35x18ft</strong>, <strong>25x18ft</strong>, <strong>17x14ft</strong>.
                </p>
              </CardBody>
              <Divider/>
              {/* <CardFooter>
              
              </CardFooter> */}
           </Card>
            <Card className="p-0 col-span-12 sm:col-span-4 min-h-[280px]">
              <CardBody>
                <div className="bg-gray-200 rounded-md" style={{height:"250px",width:"full",backgroundSize:"cover",backgroundImage:"url('https://yeegetaway.com/wp-content/uploads/2023/01/1-1-1024x576.jpg')"}}>
                </div>
                
               <p className="mt-2 text-lg">
                 Round Tent
                </p>
                <p className="text-md mb-2 font-thin">
                  Round tents for any occassion with custom sizes.
                </p>
              </CardBody>
              <Divider/>
              {/* <CardFooter>
              
              </CardFooter> */}
           </Card>

            <Card className="p-0 col-span-12 sm:col-span-4 min-h-[280px]">
              <CardBody>
                <div className="bg-gray-200 rounded-md" style={{height:"250px",width:"full",backgroundSize:"cover",backgroundImage:"url('https://www.bhutaninbound.com/images/subcatimages/1617695981_thump.jpg')"}}>
                </div>
                
               <p className="mt-2 text-lg">
                 Custom Outdoor Shelters
                </p>
                <p className="text-md mb-2 font-thin">
                 Design, supply and construction of Custom Permanent Outdoor shelters (Tensile Membrane Structures)
                </p>
              </CardBody>
              <Divider/>
              {/* <CardFooter>
              
              </CardFooter> */}
           </Card>
          

           <Card className="p-0 col-span-12 sm:col-span-4 min-h-[280px]">
              <CardBody>
                <div className="bg-gray-200 rounded-md" style={{height:"250px",width:"full",backgroundSize:"cover",backgroundImage:"url('https://gomissing.in/wp-content/uploads/2010/08/Prayer-flags-on-the-road-to-Thimpu.jpg')"}}>
                </div>
                
               <p className="mt-2 text-lg">
                Chadri Items
                </p>
                <p className="text-md mb-2 font-thin">
                 Lam Dhars, Ru Dhars, Thori Kheps, Chodrom Kheps and others
                </p>
              </CardBody>
              <Divider/>
              {/* <CardFooter>
              
              </CardFooter> */}
           </Card>
          </div>
      </section>


      <section className="px-8 md:px-12 mt-12 mb-4">
        <p>
          Contact Us
        </p>
        <p>

        </p>
      </section>
    </DefaultLayout>
  );
}
