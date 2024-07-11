import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import {Image} from "@nextui-org/image";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer  className="container mx-auto max-w-7xl px-6 flex-grow pt-8 mt-12 bg-gray-100">
          <div className="px-8 md:px-12 flex flex-col md:flex-row justify-between gap-8 items-end    my-8">
            <div className="max-w-lg">
              <p className="text-4xl font-bold mb-2">
                Contact Us
              </p>
              <hr />
              <p className="text-justify">
                We invite you to experience the unparalleled quality and craftsmanship of Lhakpa Daw Tailorings. Whether you need traditional ceremonial tents, custom national flags, or tailored uniforms, our expert team is here to assist you. With decades of experience and a commitment to blending tradition with modern advancements, we ensure each product meets the highest standards of excellence.
              </p>
            </div>
            <div>

              
            <div className="text-right">
              <p className="text-2xl mb-4" >Lhakpa Daw Tailoring</p>
            
              
                    <p>
                          Phone Number: +975 17601264/ +975 17374294 / +975 77273241
                  </p>
                  <p>
                    Email: lhakpadaw248@gmail.com
                  </p>
                </div>
              </div>
          </div>
      </footer>
    </div>
  );
}
