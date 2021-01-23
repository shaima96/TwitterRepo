import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import Signup from './Signup'

export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            
            <Button variant="outlined" color="primary" className="login_button" onClick={handleClickOpen}> Sign Up</Button>
            <Dialog
                maxWidth={"xs"}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogContent>
                    <div>
                        <div className="Dialog">
                            <img className='Dialog__image' src='https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image' alt='ss' />
                        </div>
                        <div>
                            <Signup  />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"> Close </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}