import React from 'react'

const KortOmMig = () => {

    function getAge ( dateString ) {
        var today = new Date();
        var birthDate = new Date( dateString );
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if ( m < 0 || ( m === 0 && today.getDate() < birthDate.getDate() ) ) {
            age--;
        }
        return age;
    }



    return (
        <div className='KortOmMigBox'>
            <div className="litleinfobox">

                <h2>Kort om mig</h2>
                <div className="airboble"></div>
                <div className="airboble"></div>
                <p>
                    Mit navn er <strong>Jonas Rishøj Christensen</strong>
                    <br />
                    Ung mand på { getAge( "2002/09/10" ) } år
                    <br />
                    Uddannet Webudvikler - November 2022
                    <br />
                    3D-College studernde med Multimedie Integrator i Fokus
                    <br />
                    Bopæl i Hinnerup - ca. 20 min med tog fra Aarhus Hovedbanegård
                </p>

            </div>
        </div>

    )
}

export default KortOmMig