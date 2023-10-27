import React from "react";
import company1 from "../assets/icons/company1.png";
import company2 from "../assets/icons/company2.png";
import company3 from "../assets/icons/company3.png";
import company4 from "../assets/icons/company4.png";
import company5 from "../assets/icons/company5.png";
import company6 from "../assets/icons/company6.png";
import company7 from "../assets/icons/company7.png";
import membership from "../assets/icons/membership.png";
import association from "../assets/icons/association.png";
import group from "../assets/icons/group-clubs.png";

function Services() {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: membership,
    },
    {
      id: 2,
      title: "National Association",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: association,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: group,
    },
  ];
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-xl mx-auto'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>
          Our Clients
        </h2>
        <p className='text-neutralGrey'>
          We have been working with some Fortune 500+ clients
        </p>

        {/* Company logo */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
          <img src={company1} alt='' />
          <img src={company2} alt='' />
          <img src={company3} alt='' />
          <img src={company4} alt='' />
          <img src={company5} alt='' />
          <img src={company6} alt='' />
          <img src={company7} alt='' />
        </div>

        {/* Services card */}
        <div className='mt-29 md:w-1/2 mx-auto text-center '>
          <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>
            Manage your entire community in a single system
          </h2>
          <p className='text-neutralGrey'>Who is Nextcent suitable for?</p>
        </div>

        {/* cards */}
        <div className='mt-14 grid lg:grid-cols-3 md:grid-col-2 grid-cols-1 md:w-11/12 mx-auto gap-12 '>
          {services.map((service) => (
            <div
              key={service.id}
              className='px-4 py-8 text-center wd:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
              <div>
                <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                  <img src={service.image} alt='m-5' className='-ml-2' />
                </div>
                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>
                  {service.title}
                </h4>
                <p className='text-sm text-neutralGrey'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
