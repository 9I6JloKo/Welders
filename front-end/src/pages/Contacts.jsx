import React from 'react'

export default function Contacts() {
    return (
        <div className="contacts-page">
            <div className="top-container">
                <h1>Contacts</h1>
                <p>There are some information for additional contacts and you can also apply for a course here</p>
            </div>
            <div className="left-column w-50">
                <form action="/apply" method="post" className="d-flex w-100 flex-wrap gap-2">
                    <div class="form-row">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" placeholder="Name" required />
                        </div>
                        <div class="form-group">
                            <input type="text" name="surname" class="form-control" placeholder="Surname" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <input type="number" name="code" class="form-control" placeholder="Personal code" required />
                        </div>
                        <div class="form-group">
                            <input type="date" name="birthday" class="form-control" placeholder="Birth date" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <select name="course" id="course" class="form-control" required>
                                <option value="" selected disabled>Course</option>
                                <option value="semi-automatic">Welder (semi-automatic welding)</option>
                                <option value="welding-metal">Welding and metal processing</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <select name="city" id="city" class="form-control" required>
                                <option value="" selected disabled>City</option>
                                <option value="Tallinn">Tallinn</option>
                                <option value="Narva">Narva</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <input type="email" name="email" class="form-control" placeholder="Email" required />
                        </div>
                        <div class="form-group">
                            <input type="text" name="phone" class="form-control" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group w-100">
                            <textarea className="form-control" name="description" placeholder='Extra information'></textarea>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button type="submit">Apply to a course</button>
                    </div>
                </form>
            </div >
            <div className="right-column w-50">

            </div>
        </div >
    )
}