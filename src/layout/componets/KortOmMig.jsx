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
            Kort Om Mig
            <br/>
            Jeg er {getAge("2002/09/10")} år

        </div>

    )
}

export default KortOmMig