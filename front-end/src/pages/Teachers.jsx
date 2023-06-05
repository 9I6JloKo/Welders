/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import teacher1 from '../assets/teacher1.png';
import teacher2 from '../assets/teacher2.png';
import teacher3 from '../assets/teacher3.png';
import teacher4 from '../assets/teacher4.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import google from '../assets/google.png';
export default function Teachers() {
    return (
        <div id="teachers" className="teachers">
            <h2>OUR TEACHERS</h2>
            <div className='teachers_div'>
                <div>
                    <div className='social_media_teacher'>
                        <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                        <a href="https://twitter.com/?lang=ru"><img src={twitter} alt="" /></a>
                        <a href="https://www.youtube.com/@googleplus"><img src={google} alt="" /></a>
                    </div>
                    <img src={teacher1} alt="" />
                </div>
                <div>
                    <div className='social_media_teacher'>
                        <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                        <a href="https://twitter.com/?lang=ru"><img src={twitter} alt="" /></a>
                        <a href="https://www.youtube.com/@googleplus"><img src={google} alt="" /></a>
                    </div>
                    <img src={teacher2} alt="" />
                </div>
                <div>
                    <div className='social_media_teacher'>
                        <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                        <a href="https://twitter.com/?lang=ru"><img src={twitter} alt="" /></a>
                        <a href="https://www.youtube.com/@googleplus"><img src={google} alt="" /></a>
                    </div>
                    <img src={teacher3} alt="" />
                </div>
                <div>
                    <div className='social_media_teacher'>
                        <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                        <a href="https://twitter.com/?lang=ru"><img src={twitter} alt="" /></a>
                        <a href="https://www.youtube.com/@googleplus"><img src={google} alt="" /></a>
                    </div>
                    <img src={teacher4} alt="" />
                </div>
            </div>
        </div>
    )
}