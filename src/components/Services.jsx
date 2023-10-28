import React from "react";
import company1Img from "../assets/company1.png";
import company2Img from "../assets/company2.png";
import company3Img from "../assets/company3.png";
import company4Img from "../assets/company4.png";
import company5Img from "../assets/company5.png";
import company6Img from "../assets/company6.png";
import company7Img from "../assets/company7.png";
import membershipImg from "../assets/icons/membership.png";
import associationImg from "../assets/icons/association.png";
import groupImg from "../assets/icons/group-clubs.png";

function Services() {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: membershipImg,
    },
    {
      id: 2,
      title: "National Association",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: associationImg,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: groupImg,
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
          <img src={company1Img} alt='' />
          <img src={company2Img} alt='' />
          <img src={company3Img} alt='' />
          <img src={company4Img} alt='' />
          <img src={company5Img} alt='' />
          <img src={company6Img} alt='' />
          <img src={company7Img} alt='' />
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
