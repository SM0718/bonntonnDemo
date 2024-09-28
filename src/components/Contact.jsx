import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import Input from "./Input"
import Button from './Button'
import emailjs from '@emailjs/browser';

function Contact() {

    const {register, handleSubmit, formState: { errors }} = useForm()
    const [loading, setLoading] = useState(false)

    const [isOpen, setIsOpen] = useState(false);
    const [isQuantityOpen, setIsQuantityOpen] = useState(false);
    const [isBudgetOpen, setIsBudgetOpen] = useState(false)

    const [selectedValue, setSelectedValue] = useState('Please Select');
    const [selectedQuantity, setSelectedQuantity] = useState('Please Select');
    const [selectedBudget, setSelectedBudget] = useState('Please Select')
    

    const quantityOptions = [
        { value: '1', label: '50 to 100' },
        { value: '2', label: '100 to 200' },
        { value: '3', label: '200 Above' },
    ];

    const options = [
        { value: '1', label: 'Wedding' },
        { value: '2', label: 'Birth Announcements' },
        { value: '3', label: 'Corporate Gifting' },
    ];

    const budget = [
        { value: '1', label: '₹1200 - ₹1499' },
        { value: '2', label: '₹1500 - ₹2499' },
        { value: '3', label: '₹2500 - ₹3999' },
    ];

      const sendEmail = async(form_data) => {

        await emailjs
          .send('service_kxvj3bw', 'template_nngxmc8', form_data, 'vbxUt_3cErW2Bt5GH')
          .then(
            (response) => {
              console.log('SUCCESS!', response);
              alert('Thank You For Contacting Us! We will get back to you soon');
              setLoading(false)
            },
            (error) => {
              console.log('FAILED...', error);
              alert('Error sending email');
            }
          );
      };

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        setIsQuantityOpen(false)
        setIsBudgetOpen(false)
    };

    const handleQuantity = (value) => {
        setSelectedQuantity(value);
        setIsOpen(false);
        setIsQuantityOpen(false)
        setIsBudgetOpen(false)
    }

    const handleBudget = (value) => {
        setSelectedBudget(value);
        setIsOpen(false);
        setIsQuantityOpen(false)
        setIsBudgetOpen(false)
    }
    const handleFormSubmit = async(data) => {

        setLoading(true)
        const emailData = {
            from_name: data.first_name,
            user_phone: data.whatsapp_number,
            order_quantity: selectedQuantity,
            occasion: selectedValue,
            user_email: data.user_email,
            user_budget: selectedBudget,
            user_platform: data.user_knowledge && "Internet Search"
        };

        console.log(emailData)
        await sendEmail(emailData)
    }

  return (
    <div className='w-full px-2 lg:p-0 lg:w-1/2'>
        <form 
        onSubmit={handleSubmit(handleFormSubmit)} 
        className='h-auto w-full py-16 px-4 lg:px-8 rounded-lg flex flex-col justify-center gap-6 border-2 border-[#c7c7c7]'>
              
             
              <div className='flex flex-col lg:flex-row gap-8'>
                <div className='w-full lg:w-1/2 flex flex-col gap-1'>
                <label className=''>First Name*</label>
                <Input
                    className="border-2 border-[#c7c7c7] p-2 rounded-lg "
                    placeholder="First Name"
                    type="text"
                    labelStyle=""
                    {...register("first_name", {
                        required: true,
                    })}
                />
                </div>
                
                <div className='w-full lg:w-1/2 flex flex-col gap-1'>
                    <label className=''>Last Name*</label>
                <Input
                    className="border-2 border-[#c7c7c7] p-2  rounded-lg "
                    placeholder="Last Name"
                    type="text"
                    labelStyle=""
                    {...register("last_name", {
                        required: true,
                    })}
                />
                </div>
                
                </div>


             
                <div className='flex flex-col lg:flex-row gap-8'>

                <div className='w-full lg:w-1/2 flex flex-col justify-center gap-1'>
                <h3>Quantity*</h3>
                <div className="relative inline-block">
                    <Button
                        type={'button'}
                        onClick={() => setIsQuantityOpen(!isQuantityOpen)}
                        className="w-full p-2 border-2 border-[#c7c7c7] rounded-lg text-left"
                    >
                        {selectedQuantity}
                    </Button>
                    {isQuantityOpen && (
                        <div className="absolute w-full mt-1 opacity-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                            {quantityOptions.map((option) => (
                                <div
                                    key={option.value}
                                    onClick={() => handleQuantity(option.label)}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
            )}
            </div>
                    </div>
                
                <div className='w-full lg:w-1/2 flex flex-col gap-1'>
                <label>Email*</label>
                <Input
                className="border-2 border-[#c7c7c7] p-2 rounded-lg"
                placeholder="Enter your email"
                type="email"
                {...register("user_email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                </div>
                </div>


           
                <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12'>
                   

                    <div className='w-full lg:w-1/2 flex flex-col gap-1'>
                <label>Whatsapp Number*</label>
                <Input
                    className="border-2 border-[#c7c7c7] p-2 rounded-lg"
                    placeholder="Whatsapp Number"
                    type="number"
                    {...register("whatsapp_number", {
                        required: true,
                        pattern: {
                            value: /^\+?(\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                            message: 'Enter a valid phone number'
                          }
                    })}
                /> 
                </div>

                

                <div className='w-full lg:w-1/2 flex flex-col justify-center gap-1'>
                <h3>Occasion*</h3>
                <div className="w-full relative inline-block">
                    <Button
                    type={'button'}
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full p-2 border-2 border-[#c7c7c7] rounded-lg text-left"
                    >
                        { selectedValue }
                    </Button>
                    {isOpen && (
                        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                            {options.map((option) => (
                                <div
                                    key={option.value}
                                    onClick={() => handleSelect(option.label)}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    { option.label }
                                </div>
                            ))}
                        </div>
            )}
            </div>
                </div>
                    
                </div>




                <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12'>
                    <div className='w-full lg:w-1/2 flex flex-col justify-center gap-1'>
                <h3>Budget*</h3>
                <div className="relative inline-block">
                    <Button
                        type={'button'}
                        onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                        className="w-full p-2 border-2 border-[#c7c7c7] rounded-lg text-left"
                    >
                        {selectedBudget}
                    </Button>
                    {isBudgetOpen && (
                        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                            {budget.map((option) => (
                                <div
                                    key={option.value}
                                    onClick={() => handleBudget(option.label)}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
            )}
            </div>
                    </div>

                <div className='w-full lg:w-1/2 flex flex-col gap-1'>
                <label>Where Did you Hear About Us From?</label>
                <Input
                className="border-2 border-[#c7c7c7] p-2 rounded-lg"
                placeholder="Enter Platform"
                type="text"
                {...register("user_knowledge")}
                />
                </div>
                    
                </div>



                <Button disabled={loading? true : false}  type={'submit'} className={`w-full md:w-[450px] lg:w-3/4 h-12 mt-4 transition duration-500 mx-auto font-bold rounded-[24px] border border-[#1F0B00] text-[#1F0B00] text-xl hover:bg-[#454545] hover:text-[#fff7f2] ${loading? 'bg-[#777] cursor-wait' : 'bg-white cursor-pointer'} `}>
                        Submit
                    </Button>
                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
        </form>
    </div>
  )
}

export default Contact