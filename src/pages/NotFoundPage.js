import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';

import Header from '../components/common/Header';
import Button from '../components/common/Button';
import NotFoundImage from '../images/Astronaut-big.png';
import { Image } from '../styles/mixins';

const NotFoundPage = ({ history }) => {
    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <Button callback={() => history.push('/')} options={{ left: true }} />
            <Header title={'Not Found - 404'} />
            <Image src={NotFoundImage} />
        </>
    );
};

export default withRouter(NotFoundPage);
