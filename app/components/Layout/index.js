import React from 'react';

export default function Layout(props) {
    return (
        <div className="global container">
            <header>
                <div className="row">
                    <div className="col-lg-*">
                        <h1>Title</h1>
                    </div>
                </div>
            </header>
            <main>
                {props.children}
            </main>
            <footer></footer>
        </div>
    );
}

Layout.propTypes = {
    children: React.PropTypes.object.isRequired,
};
