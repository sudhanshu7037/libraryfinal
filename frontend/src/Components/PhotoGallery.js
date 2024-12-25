import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="http://imsec.ac.in/assets/images/gallery/technovation-2019/1.jpg" alt=''/>
                <img src="https://media.licdn.com/dms/image/v2/D5622AQH01RuquCukSw/feedshare-shrink_1280/feedshare-shrink_1280/0/1725986481260?e=1738195200&v=beta&t=1UnIv4SZMfZyc_JuHExELrZDo87FMULTNVQA-Bf9OWQ" alt=''/>
                <img src="https://media.licdn.com/dms/image/v2/D5622AQFJl9FEWisRFQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1725986481468?e=1738195200&v=beta&t=nNoy2UIb8DrknJSiCwHq0ViXLOywmo6KHquPICQtKhM" alt=''/>
                <img src="http://imsec.ac.in/assets/images/gallery/technovation-2019/4.jpg" alt=''/>
                <img src="http://imsec.ac.in/assets/images/gallery/technovation-2019/5.jpg" alt=''/>
                <img src="http://imsec.ac.in/assets/images/gallery/technovation-2019/6.jpg" alt=''/>
                <img src="https://media.licdn.com/dms/image/v2/D4E22AQFXPjl10ZBThw/feedshare-shrink_800/feedshare-shrink_800/0/1715792977660?e=1738195200&v=beta&t=Tw9dhuzgphPZu9EdksGGeDAj6NlfduAhicw4_1ZWl8w" alt=''/>
                <img src="https://media.licdn.com/dms/image/v2/D5622AQFhGmQM6Yrw_w/feedshare-shrink_1280/feedshare-shrink_1280/0/1713800228799?e=1738195200&v=beta&t=tr5UIyRwfkn4hhqaz1SBjjV0F2-4NfaKQ_lt0B7AzlI" alt=''/>
                <img src="https://media.licdn.com/dms/image/v2/D4E22AQH0VuoQCnjHiw/feedshare-shrink_1280/feedshare-shrink_1280/0/1712928146259?e=1738195200&v=beta&t=UIKbGciysHv3xdTpHug_xdeJMUWn_hWDlysmzZy8MEU" alt=''/>
                <img src="https://media.licdn.com/dms/image/v2/D4E22AQFqMK8xOvAIlg/feedshare-shrink_1280/feedshare-shrink_1280/0/1706352842171?e=1738195200&v=beta&t=wlFTH2u5_LyJmUPkkw_hGIZ_rqZ5zNIuRZgafUIPFSA" alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery