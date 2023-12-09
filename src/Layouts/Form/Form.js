import React from 'react';
import "../../Style/form.css";
import useFetchAOS from '../../Utils/useFetchAOS';
const Form = () => {
    useFetchAOS();
    return (
        <div className='Form'>
            <form className='Form-form'>
                <h3 data-aos="fade-up">We’d love to hear from you!</h3>
                <p data-aos="fade-up">Let’s chat about Kensho products, pricing, or ways our team can help your business!</p>
                <div className='Form-form_item' data-aos="fade-up">
                    <div className='Form-form_item_label'>
                        First Name<span>*</span> 
                    </div>
                    <input name="first_name" type="text"/>
                </div> 
                <div className='Form-form_item' data-aos="fade-up">
                    <div className='Form-form_item_label'>
                        Last Name<span>*</span>
                    </div>
                    <input name='last_name' type="text"/>
                </div>
                <div className='Form-form_item' data-aos="fade-up">
                    <div className='Form-form_item_label'>
                        Company name<span>*</span>
                    </div>
                    <input name='company_name' type="text"/>
                </div>
                <div className='Form-form_item' data-aos="fade-up">
                    <div className='Form-form_item_label'>
                        Work Email<span>*</span>
                    </div>
                    <input name="email" type="email"/>
                </div>
                <div className='Form-form_item' data-aos="fade-up">
                    <div className='Form-form_item_label'>
                        Country/Region
                    </div>
                    <select name="contact-form-country" id="contact-form-country">
                        <option disabled value="">Please Select</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                        <option>American Samoa</option>
                        <option>Andorra</option>
                        <option>Angola</option>
                        <option>Anguilla</option>
                        <option>Antarctica</option>
                        <option>Antigua and Barbuda</option>
                        <option>Argentina</option>
                        <option>Armenia</option>
                        <option>Aruba</option>
                        <option>Australia</option>
                        <option>Austria</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                        <option>Belarus</option>
                        <option>Belgium</option>
                        <option>Belize</option>
                        <option>Benin</option>
                        <option>Bermuda</option>
                        <option>Bhutan</option>
                        <option>Bolivia</option>
                        <option>Bonaire, Sint Eustatius and Saba</option>
                        <option>Bosnia and Herzegovina</option>
                        <option>Botswana</option>
                        <option>Bouvet Island</option>
                        <option>Brazil</option>
                        <option>British Indian Ocean Territory</option>
                        <option>British Virgin Islands</option>
                        <option>Brunei</option>
                        <option>Bulgaria</option>
                        <option>Burkina Faso</option>
                        <option>Burundi</option>
                        <option>Cabo Verde</option>
                        <option>Cambodia</option>
                        <option>Cameroon</option>
                        <option>Cayman Islands</option>
                        <option>Central African Republic</option>
                        <option>Chad</option>
                        <option>Chile</option>
                        <option>China</option>
                        <option>Christmas Island</option>
                        <option>Cocos (Keeling) Islands</option>
                        <option>Colombia</option>
                        <option>Comoros</option>
                        <option>Congo</option>
                        <option>Cook Islands</option>
                        <option>Costa Rica</option>
                        <option>Croatia</option>
                        <option>Cuba</option>
                        <option>Curaçao</option>
                        <option>Cyprus</option>
                        <option>Czechia</option>
                        <option>Côte d'Ivoire</option>
                        <option>Democratic Republic of the Congo</option>
                        <option>Denmark</option>
                        <option>Djibouti</option>
                        <option>Dominica</option>
                        <option>Dominican Republic</option>
                        <option>Ecuador</option>
                        <option>Egypt</option>
                        <option>El Salvador</option>
                        <option>Equatorial Guinea</option>
                        <option>Eritrea</option>
                        <option>Estonia</option>
                        <option>Eswatini</option>
                        <option>Ethiopia</option>
                        <option>Falkland Islands</option>
                        <option>Faroe Islands</option>
                        <option>Fiji</option>
                        <option>Finland</option>
                        <option>France</option>
                        <option>French Guiana</option>
                        <option>French Polynesia</option>
                        <option>French Southern Territories</option>
                        <option>Gabon</option>
                        <option>Gambia</option>
                        <option>Georgia</option>
                        <option>Germany</option>
                        <option>Ghana</option>
                        <option>Gibraltar</option>
                        <option>Greece</option>
                        <option>Greenland</option>
                        <option>Grenada</option>
                        <option>Guadeloupe</option>
                        <option>Guam</option>
                        <option>Guatemala</option>
                        <option>Guernsey</option>
                        <option>Guinea</option>
                        <option>Guinea-Bissau</option>
                        <option>Guyana</option>
                        <option>Haiti</option>
                        <option>Heard Island and McDonald Islands</option>
                        <option>Honduras</option>
                        <option>Hong Kong</option>
                        <option>Hungary</option>
                        <option>Iceland</option>
                        <option>India</option>
                        <option>Indonesia</option>
                        <option>Iran</option>
                        <option>Iraq</option>
                        <option>Ireland</option>
                        <option>Isle of Man</option>
                        <option>Israel</option>
                        <option>Italy</option>
                        <option>Jamaica</option>
                        <option>Japan</option>
                        <option>Jersey</option>
                        <option>Jordan</option>
                        <option>Kazakhstan</option>
                        <option>Kenya</option>
                        <option>Kiribati</option>
                        <option>Kuwait</option>
                        <option>Kyrgyzstan</option>
                        <option>Laos</option>
                        <option>Latvia</option>
                        <option>Lebanon</option>
                        <option>Lesotho</option>
                        <option>Liberia</option>
                        <option>Libya</option>
                        <option>Liechtenstein</option>
                        <option>Lithuania</option>
                        <option>Luxembourg</option>
                        <option>Macao</option>
                        <option>Madagascar</option>
                        <option>Malawi</option>
                        <option>Malaysia</option>
                        <option>Maldives</option>
                        <option>Mali</option>
                        <option>Malta</option>
                        <option>Marshall Islands</option>
                        <option>Martinique</option>
                        <option>Mauritania</option>
                        <option>Mauritius</option>
                        <option>Mayotte</option>
                        <option>Mexico</option>
                        <option>Micronesia</option>
                        <option>Moldova</option>
                        <option>Monaco</option>
                        <option>Mongolia</option>
                        <option>Montenegro</option>
                        <option>Montserrat</option>
                        <option>Morocco</option>
                        <option>Mozambique</option>
                        <option>Myanmar (Burma)</option>
                        <option>Namibia</option>
                        <option>Nauru</option>
                        <option>Nepal</option>
                        <option>Netherlands</option>
                        <option>New Caledonia</option>
                        <option>New Zealand</option>
                        <option>Nicaragua</option>
                        <option>Niger</option>
                        <option>Nigeria</option>
                        <option>Niue</option>
                        <option>Norfolk Island</option>
                        <option>North Korea</option>
                        <option>North Macedonia</option>
                        <option>Northern Mariana Islands</option>
                        <option>Norway</option>
                        <option>Oman</option>
                        <option>Pakistan</option>
                        <option>Palau</option>
                        <option>Palestine</option>
                        <option>Panama</option>
                        <option>Papua New Guinea</option>
                        <option>Paraguay</option>
                        <option>Peru</option>
                        <option>Philippines</option>
                        <option>Pitcairn</option>
                        <option>Poland</option>
                        <option>Portugal</option>
                        <option>Puerto Rico</option>
                        <option>Qatar</option>
                        <option>Romania</option>
                        <option>Russia</option>
                        <option>Rwanda</option>
                        <option>Réunion</option>
                        <option>Saint Barthélemy</option>
                        <option>Saint Helena, Ascension and Tristan da Cunha</option>
                        <option>Saint Kitts and Nevis</option>
                        <option>Saint Lucia</option>
                        <option>Saint Martin</option>
                        <option>Saint Pierre and Miquelon</option>
                        <option>Saint Vincent and the Grenadines</option>
                        <option>Samoa</option>
                        <option>San Marino</option>
                        <option>Sao Tome and Principe</option>
                        <option>Saudi Arabia</option>
                        <option>Senegal</option>
                        <option>Serbia</option>
                        <option>Seychelles</option>
                        <option>Sierra Leone</option>
                        <option>Singapore</option>
                        <option>Sint Maarten</option>
                        <option>Slovakia</option>
                        <option>Slovenia</option>
                        <option>Solomon Islands</option>
                        <option>Somalia</option>
                        <option>South Africa</option>
                        <option>South Georgia and the South Sandwich Islands</option>
                        <option>South Korea</option>
                        <option>South Sudan</option>
                        <option>Spain</option>
                        <option>Sri Lanka</option>
                        <option>Sudan</option>
                        <option>Suriname</option>
                        <option>Svalbard and Jan Mayen</option>
                        <option>Sweden</option>
                        <option>Switzerland</option>
                        <option>Syria</option>
                        <option>Taiwan</option>
                        <option>Tajikistan</option>
                        <option>Tanzania</option>
                        <option>Thailand</option>
                        <option>Timor-Leste</option>
                        <option>Togo</option>
                        <option>Tokelau</option>
                        <option>Tonga</option>
                        <option>Trinidad and Tobago</option>
                        <option>Tunisia</option>
                        <option>Turkey</option>
                        <option>Turkmenistan</option>
                        <option>Turks and Caicos Islands</option>
                        <option>Tuvalu</option>
                        <option>Uganda</option>
                        <option>Ukraine</option>
                        <option>United Arab Emirates</option>
                        <option>United States Minor Outlying Islands</option>
                        <option>Uruguay</option>
                        <option>US Virgin Islands</option>
                        <option>Uzbekistan</option>
                        <option>Vanuatu</option>
                        <option>Vatican</option>
                        <option>Venezuela</option>
                        <option>Vietnam</option>
                        <option>Wallis and Futuna</option>
                        <option>Western Sahara</option>
                        <option>Yemen</option>
                        <option>Zambia</option>
                        <option>Zimbabwe</option>
                        <option>Åland Islands</option>
                    </select>
                </div>
                <div className='Form-form_item' data-aos="fade-up">
                    <div className='Form-form_item_label'>
                        State/Region
                    </div>
                    <input type='text' name="state_region"/>
                </div>
                <div className='Form-form_item' data-aos="fade-up">
                    <div className='Form-form_item_label'>
                        Phone number<span>*</span>    
                    </div>
                    <input name='phone' type="tel"/>
                </div>
                <div className='Form-form_item' data-aos="fade-up">
                    <div className='Form-form_item_label'>
                        Product or Service you‘re interested in<span>*</span>    
                    </div>
                    <select>
                        <option disabled value="">Please select</option>
                        <option value="Kensho scribe">Kensho Scribe</option>
                        <option value="Kensho nerd">Kensho NERD</option>
                        <option value="Kensho classify">Kensho Classify</option>
                        <option value="Kensho extract">Kensho Extract</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='Form-form_item' data-aos="fade-up">
                    <div className='Form-form_item_label'>
                        What would you like to discuss with the team?<span>*</span>     
                    </div>
                    <textarea name="overthinking" rows="4"></textarea>
                </div>
                <div className='Form-form_rules' data-aos="fade-up">
                    <input type='checkbox' name="dieukhoan"/>
                    <label htmlFor='dieukhoan'>I‘d like to receive product information, updates and promotions from Kensho.</label>
                </div>
                <div className='Form-form_item' data-aos="fade-up">
                    <button>CONTACT US</button>
                </div>
            </form>
        </div>
    );
};

export default Form;