import React, { useEffect, useState} from 'react';
import "./Story1.css"
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, LinearProgress} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import getBaseUrl from "../config";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

const Story2 = () => {
    const handleClick = (d) => {
        setZipcode(
d
        );
    };
    const formData = new FormData();

    const [zipcode, setZipcode] = useState("");
    const [record, setRecord] = useState("");
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (loading) {
            const timer = setInterval(() => {
                setProgress((oldProgress) => {
                    if (oldProgress === 100) {
                        return 0;
                    }
                    return oldProgress + 100 / 30;
                });
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        } else {
            setProgress(0);
        }
    }, [loading]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        formData.set("description", zipcode);
        const queryParams = new URLSearchParams();
        queryParams.set('description', zipcode);
        const url = `${getBaseUrl()}/api/chatGPTPipeline/${queryParams}`;

        try {
            const response = await fetch(url);
            console.log("response: " + response);
            const data = await response.json();
            console.log("data: " + data);
            setRecord(data);
            console.log(data);
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);
    };

    return(
        <div>
            <style>{`
                .custom-form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    padding: 2rem;
                    border-radius: 1rem;
                    background-color: #fff;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .custom-textfield {
                    width: 60% !important;
                }
                .custom-textfield .MuiOutlinedInput-input {
                    padding: 12px 14px !important;
                }
                .custom-textfield .MuiInputLabel-outlined {
                    transform: translateY(14px) !important;
                }
                .custom-textfield .MuiInputLabel-outlined.MuiInputLabel-shrink {
                    transform: translateY(-6px) scale(0.75) !important;
                }
                .custom-button {
                    width: 60% !important;
                }
                .custom-error {
                    color: red;
                    font-weight: bold;
                    margin-top: 1rem;
                }
                .custom-markdown {
                    margin-top: 1rem;
                    width: 100%;
                    overflow-x: auto;
                }
                .custom-markdown table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .custom-markdown th, .custom-markdown td {
                    border: 1px solid #ccc;
                    padding: 8px;
                    text-align: left;
                }
            `}</style>

            <form
                className="custom-form"
                onSubmit={handleSubmit}
            >
                <div
                    style={{
                        marginBottom: "1rem",
                        cursor: "pointer",
                        textDecoration: "underline",
                    }}
                    onClick={
                    () => handleClick("My zipcode is 94025, can you show me cumulative installations and Gini Index for my area from 2015 to 2017?")
                    }
                >
                    Example1: My zipcode is 94025, can you show me cumulative installations and Gini Index for my area from 2015 to 2017?
                </div>
                <div
                    style={{
                        marginBottom: "1rem",
                        cursor: "pointer",
                        textDecoration: "underline",
                    }}
                    onClick={
                        () => handleClick("My zipcode is 94305, can you show me residential PV incentives, income, and saturation fraction for my area from 2014 to 2016?")
                    }
                >
                    Example2: My zipcode is 94305, can you show me residential PV incentives, income, and saturation fraction for my area from 2014 to 2016?
                </div>
                <TextField
                    className="custom-textfield"
                    variant="outlined"
                    label=""
                    value={zipcode}
                    onChange={(event) =>
                        setZipcode(event.target.value)
                    }
                    fullWidth
                    required
                />

                <Button
                    className="custom-button"
                    variant="contained"
                    color="primary"
                    type="submit"
                    startIcon={<SearchIcon />}
                    disabled={!zipcode || loading}
                >
                    Talk to chatGPT
                </Button>
            </form>

            {loading && (
                <LinearProgress
                    variant="buffer"
                    value={progress}
                    style={{ width: '100%', marginTop: '1rem' }}
                />
            )}
            {error && (
                <div className="custom-error">
                    {error}
                </div>
            )}
            {record && (
                <ReactMarkdown
                    className="custom-markdown"
                    children={record}
                    remarkPlugins={[remarkGfm]}
                />
            )}
        </div>
    );
}

export default Story2;