import React from 'react';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            {/* <div className={s.profile}>
                    <img
                        src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                        alt=""
                    />
                </div> */}
            <div>
                <img src={props.profile.photos.large} alt="" />
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
    );
};

export default ProfileInfo;
