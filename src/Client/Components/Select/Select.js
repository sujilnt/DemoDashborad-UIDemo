import React,{Component} from "react";
import {InputGroup,Menu}  from "@blueprintjs/core";
import {Select} from "@blueprintjs/select";

export class ExtendedSelect extends Component {
    constructor(props) {
        super(props);
        this.inputRef = null;
        this.state = {query: ""};
    }

    handleInputChanged = event => {
        this.setState({query: event.target.value});
    }

    receiveInputRef = (ref) => {
        this.inputRef = ref;
    }

    handlePopoverOpening = () => {
        if (this.inputRef) {
            this.inputRef.focus();
        }
    }

    listRenderer = ({filteredItems, renderItem}) => {
        // Apply the supplied item renderer to the filtered list of items
        const renderedItems = filteredItems.map(renderItem);

        return (
            <div>
                {this.props.header}
                <InputGroup inputRef={this.receiveInputRef} value={this.state.query} onChange={this.handleInputChanged} leftIcon="search" />
                <Menu>
                    {renderedItems}
                </Menu>
                {this.props.footer}
            </div>
        );
    }

    render() {
        return (
            <Select
                items={this.props.items}
                filterable={false}
                query={this.state.query}
                itemListRenderer={this.listRenderer}
                itemPredicate={this.props.itemPredicate}
                itemRenderer={this.props.itemRenderer}
                popoverProps={{onOpening:this.handlePopoverOpening}}
                onItemSelect={this.props.onItemSelect}
            >

                {this.props.children}
            </Select>
        );
    }
}