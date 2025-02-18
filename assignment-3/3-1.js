
const states = ["Andhra Pradesh", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
const filteredStates = states.filter(state => !/^[aeiouAEIOU]/.test(state));
console.log(filteredStates);
  