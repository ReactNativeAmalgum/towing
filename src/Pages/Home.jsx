import React from 'react'
import HomeBanner from './Inc/HomeBanner'
import HomeContact from './Inc/HomeContact'
import HomeAbout from './Inc/HomeAbout'
import HomeFeature from './Inc/HomeFeature'
import HomeService from './Inc/HomeService'
import HomeJoinTeam from './Inc/HomeJoinTeam'
import HomeTestimonial from './Inc/HomeTestimonial'
import { MetaTags } from "react-meta-tags";

export default function Home() {
  return (
    <>
        <MetaTags>
        <title>{`Towing Services Mumbai | Modern Towing`}</title>
        <meta title={`Towing Services Mumbai | Modern Towing `} />
        <meta name="description" content="Towing Services Mumbai, Car Towing Services in Andheri, Top Car Towing Services in Andheri West, Flatbed Towing Service in Andheri, Best Hydraulic Towing in Andheri, Two Wheeler Towing Services in Andheri, Top Car Towing Services For Luxury Car in Andheri, Truck Towing Services in Andheri, All Type Of Towing Services, Towing Services near Andheri " />
        <link rel="canonical" href={`Flatbed Towing Service in Andheri | Modern Towing, Best Hydraulic Towing in Andheri | Modern Towing, Two Wheeler Towing Services in Andheri | Modern Towing, Top Car Towing Services For Luxury Car in Andheri, Truck Towing Services in Andheri | Modern Towing   `} />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content={`Towing Services Mumbai | Modern Towing `} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://demo.com/" />
        <meta property="og:description" content="Looking for prompt and reliable Towing Services in Mumbai? Our 24/7 roadside assistance is just a call away. Get professional help for a car in one call." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      <HomeBanner />
      <HomeContact />
      <HomeAbout />
      <HomeFeature />
      <HomeService />
      <HomeJoinTeam />
      <HomeTestimonial />
    </>
  )
}
