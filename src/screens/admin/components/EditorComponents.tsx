import React, { Dispatch, SetStateAction } from "react"
import { Input, Select, MenuItem } from "@mui/material";

interface props{
    stateFunction: Dispatch<SetStateAction<string>>;
    value: string;
}

const TitleField:React.FC<props> = ({stateFunction, value}) =>{
    return (
        <div className="text-blac w-[24.5vw]">
            <p className="hover:cursor-default text-[20px]">TITLE</p>
            <Input
                disableUnderline={true}
                sx={{
                    border: "white",
                    background: "white",
                    paddingLeft: "5px",
                    fontFamily: "Red Hat Mono",
                    width: "100%",
                }}
                value={value}
                margin="dense"
                onChange={(event) => stateFunction(event.target.value)}
            />
        </div>
    );
}

const DescriptionField:React.FC<props> = ({stateFunction, value}) => {
    return (
        <div className="w-[100%]">
            <p className="hover:cursor-default whitespace-pre text-[20px]">
                DESCRIPTION
                <span className="text-[#9B8F84] text-[16px]">
                    {" "}
                    (2-3 sentences)
                </span>
            </p>
            <Input
                disableUnderline={true}
                sx={{
                    border: "white",
                    background: "white",
                    paddingLeft: "5px",
                    fontFamily: "Red Hat Mono",
                    width: "100%",
                    fontSize: "16px",
                }}
                margin="dense"
                value={value}
                onChange={(event) => stateFunction(event.target.value)}
                multiline={true}
            />
        </div>
    );
}

const SelectCategory:React.FC<props> = ({stateFunction, value}) => {
    return (
        // <div className="w-[100%]">
            <div className="w-[100%] flex flex-col text-[20px] items-end">
                <p className="w-[80%] text-left">Category</p>
                {/* <Select label="Category" variant="filled" labelId="demo-simple-select-filled-label"/>  */}
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={value}
                    onChange={(event) => stateFunction(event.target.value)}
                    sx={{
                        width: "80%",
                        height: "32px",
                        fontSize: "16px",
                        fontFamily: "Red Hat Mono",
                        background: "white",
                    }}
                >
                    <MenuItem
                        value={"Coffee Shops"}
                        sx={{ fontFamily: "Red Hat Mono" }}
                    >
                        Coffee Shops
                    </MenuItem>
                    <MenuItem
                        value={"Deez"}
                        sx={{ fontFamily: "Red Hat Mono" }}
                    >
                        Deez
                    </MenuItem>
                    <MenuItem value={"CS"} sx={{ fontFamily: "Red Hat Mono" }}>
                        CS
                    </MenuItem>
                </Select>
            </div>
        // </div>
    );
}

const MainBody:React.FC<props> = ({stateFunction, value}) => {
    return(
        <div className="w-[100%]">
            <p className="hover:cursor-default whitespace-pre text-[20px]">
                MAIN BODY TEXT
            </p>
            <Input
                disableUnderline={true}
                sx={{
                    border: "white",
                    background: "white",
                    paddingLeft: "5px",
                    fontFamily: "Red Hat Mono",
                    width: "100%",
                    fontSize: "16px",
                }}
                margin="dense"
                value={value}
                onChange={(event) => stateFunction(event.target.value)}
                multiline={true}
                rows={15}
            />
        </div>
    )
}

export { DescriptionField, TitleField, SelectCategory, MainBody }