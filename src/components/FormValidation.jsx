const validateForm = (formdata, step) => {
  const errors = {};
  if(step ===1) {
    if(!formdata.name.trim()) {errors.name = "Name is required";}

    if(!formdata.email.trim()){errors.email = "Email is required";}
    else if(!/\S+@\S+\.\S+/.test(formdata.email)){errors.email = "Email is invalid";}

    if(!formdata.phone.trim()){errors.phone = "Phone is not valid";}
    else if(!/^\d{10}$/.test(formdata.phone)){errors.phone = "Phone is invalid";}

  }

  if(step === 2){
    if(!formdata.experience.trim()){errors.experience = "Experience is required";}
    if(!formdata.skills.length){errors.skills = "Skills are required";}
    
  }
  if(step === 3){
    if(!formdata.startdate.trim()){errors.startdate = "Start Date is required";}
  }

  return errors;

};

export default validateForm;