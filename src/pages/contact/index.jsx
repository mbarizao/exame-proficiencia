import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

import { Button, InputError, Text } from "components";
import { Form, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        criteriaMode: "all",
    });

    const submitForm = ({ name, email, message }) => {
        let params = {
            email: email,
            from_name: name,
            message: message
        };

        emailjs.send('service_x9iisy8', 'template_2e7tspt', params, "tW0C2Y3cBYSJL3yZU").then((success) => {
            alert('Sucesso ao enviar email, iremos lhe responder em instantes.');
            reset();
        }).catch((error) => {
            alert("Ocorreu um erro ao entrar em contato, tente novamente.");
            console.log(error)
        });

    }

    console.log(errors)

    return (
        <main>
            <section aria-label={"Sessão para contato"} >
                <Row className={'d-flex justify-content-center'}>
                    <Col className={'col-12 col-md-6 col-lg-6 col-xl-6'}>
                        <Text.Title>Contato</Text.Title>
                        <Text.Subtitle>
                            Entre em contato com nossa equipe de atendimento. Será um prazer atendê-lo..
                        </Text.Subtitle>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center my-3'}>
                    <Col className={'col-12 col-md-6 col-lg-6 col-xl-6'}>
                        <Form onSubmit={handleSubmit(submitForm)}>
                            <Form.Group>
                                <Form.Label>Seu nome</Form.Label>
                                <Form.Control
                                    type={'name'}
                                    placeholder={"Ex. João Passos"}
                                    {...register("name", { required: "Esse campo deve ser preenchido." })}
                                />

                                <ErrorMessage
                                    errors={errors}
                                    name="name"
                                    render={({ messages }) => {
                                        return <InputError messagesList={messages} />
                                    }}
                                />

                            </Form.Group>

                            <Form.Group className={'mt-3'}>
                                <Form.Label>Endereço de email</Form.Label>
                                <Form.Control
                                    type={'email'}
                                    placeholder={"nome@exemplo.com"}
                                    {...register("email", { required: "Esse campo deve ser preenchido." })}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="email"
                                    render={({ messages }) => {
                                        return <InputError messagesList={messages} />
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className={'mt-3'}>
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control
                                    className={'textareaContact'}
                                    as={"textarea"}
                                    rows={3}
                                    placeholder={"Digite aqui sua mensagem.."}
                                    {...register("message", {
                                        required: "Esse campo deve ser preenchido.", minLength: {
                                            value: 15,
                                            message: "Sua mensagem deve conter no mínimo 15 caracteres."
                                        }
                                    })}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="message"
                                    render={({ messages }) => {
                                        return <InputError messagesList={messages} />
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className={'mt-3'}>
                                <Button.Default type={'submit'}>Enviar</Button.Default>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </section>
        </main>
    )
}

export default Contact;