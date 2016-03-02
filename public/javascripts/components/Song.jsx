var React = require('react');

var songComponent =  React.createClass({
    render : function(){
        return (
            <div className="song row col-lg-8">
                <div className="col-lg-5">
                    {this.props.artist}
                </div>
                <div className="col-lg-5">
                    {this.props.name}
                </div>
                <div className="col-lg-2">
                    {this.props.favourite}
                </div>
            </div>
        );
    }
});
 
module.exports = songComponent;