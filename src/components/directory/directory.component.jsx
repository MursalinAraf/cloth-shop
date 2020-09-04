import React from 'react'
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
 import './directory.style.scss';

const Directory = ({directory}) =>  (
                <div className="directory-menu">
                    {
                        directory.sections.map(section => <MenuItem key={section.id} title = {section.title} img = {section.imageUrl} size = {section.size} link = {section.linkUrl} />)
                    }
                </div>
        )


        const mapStatetoProps = state => ({
          directory : state.directory
        })

       export default connect(mapStatetoProps)(Directory) 