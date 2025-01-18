
import { RiVisaLine } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            {/* divfooter */}
            <div className="footer bg-yellow-100 w-full py-4 flex flex-col">
                {/* divlfoq */}
                <div  className='first-row flex items-start justify-between flex-wrap px-20 py-5'> 
                    {/* divcostumer */}
                    <div className='costumer-services'>
                        <h1 className='font-bold text-xl'>Costumer service</h1>
                        <p className='text-l'>Help center</p>
                        <p className='text-l'>Shopping</p>
                        <a className='underline text-l font-'>Take our feedback survey</a>
                    </div>
                    {/* divpay */}
                    <div className='pay-with'>
                        <h1 className='font-bold text-xl'>Pay with</h1>
                        <div className="flex items-center space-x-2">
                            <div className="bg-[#fff] p-1 rounded-lg inline-block hover:shadow-md transition-shadow">
                                <RiVisaLine size={30} color={"#1E2E7F"} /> 
                            </div>  
                            <div className='w-12 h-15'>
                                <img src="../../../public/images/mastercard.png" alt="" size={30}/>
                            </div>
                            <div className="bg-[#fff] flex p-1 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <FaPaypal size={30} color={"#003087"} />
                            </div>
                            <div className='bg-[#fff] p-1 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <FaApplePay size={35} color={"#000"} />
                            </div>
                        </div>
                    </div>
                    {/* divconnect */}
                    <div className='connected'>
                        <h1 className='font-bold text-xl'>Stay connected</h1>
                        <div className="flex items-center space-x-2">
                            <div>
                                <FaSquareFacebook size={40} color={"#3b5998"} />
                            </div>
                            <div className='w-12 h-12'>
                                <img src="../../../public/images/instgrame.png" alt="" />
                            </div>
                            <div>
                                <FaSquareWhatsapp size={40} color={"#25D366"} />
                            </div>
                            <div>
                                <FaLinkedin size={40} color={"#0A66C2"} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* divlakhra */}
                <div className='secend-row mt-8 text-center text-lg'>
                    <p>@ 2025 ShopX | ELALLAOUI - BOUGUARNE - El MOHAMMADY-JNAH</p>
                </div>

            </div>

        </>
    );
}

export default Footer;
