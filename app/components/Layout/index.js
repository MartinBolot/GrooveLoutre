import React from 'react';

export default function Layout(props) {
    const { children } = props;
    return (
        <div className="global container">
            <header>
                <div className="row">
                    <div className="col-lg-*">
                        <h1 id="title">Title</h1>
                        <hr />
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer></footer>
        </div>
    );
}

Layout.propTypes = {
    children: React.PropTypes.object.isRequired,
};
