import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { DropzoneArea } from 'material-ui-dropzone'
import styles from './style.js'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Map from '../../../Maps';
import EscolhaDeCategorias from './EscolhaDeCategorias'

class CriarConteudo extends Component {

    state = {
        tipoConteudo: 'texto',
        files: [],
        rows: [],
        categoria: ''
    };

    adicioneArquivos = (files) => {
        this.setState({
            files: files
        });
    }

    adicionePost = (event) => {
        event.preventDefault();
        const formulario = event.target;
        const titulo = formulario.titulo.value;
        const resumo = formulario.resumo.value;
        const tipoConteudo = formulario.tipoConteudo.value;
        const filtros = this.state.rows.map(x => x.name)
        const conteudoTexto = tipoConteudo === 'texto' ? formulario.conteudoCard.value : "";
        let conteudo
        if (tipoConteudo !== "texto") {
            this.readFileDataAsBase64(formulario[6].files[0]).then((resolve, reject) => {
                conteudo = new Uint8Array(resolve);
                const post = {
                    usuario: this.props.usuarioLogado,
                    titulo,
                    tipoMidia: tipoConteudo === 'texto' ? 'Texto' : 'Imagem',
                    resumo,
                    conteudoTexto,
                    conteudo,
                    filtros
                };

                this.props.adicionarPost(post).then(() => {
                    this.props.getAllObras().then(() => {
                        this.props.history.push("/");
                    })
                })
            })
        } else {
            const post = {
                usuario: this.props.usuarioLogado,
                titulo,
                tipoMidia: tipoConteudo === 'texto' ? 'Texto' : 'Imagem',
                resumo,
                conteudoTexto,
                conteudo,
                filtros
            };

            this.props.adicionarPost(post).then(() => {
                this.props.getAllObras().then(() => {
                    this.props.history.push("/");
                })
            })
        }
    }

    readFileDataAsBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                resolve(event.target.result);
            };

            reader.onerror = (err) => {
                reject(err);
            };

            new Uint8Array(reader.readAsArrayBuffer(file));
        });
    }

    pegueValorCategoria = (e) => {
        this.setState({ categoria: `#${e.target.value}` })
    }

    addCategoria = () => {
        if (this.state.categoria !== '' && this.state.rows.map(x => x.name).indexOf(this.state.categoria) === -1) {
            this.setState({ rows: [...this.state.rows, { name: this.state.categoria }] })
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5" className={classes.estiloTexto}>
                        Postar
                    </Typography>
                    <form className={classes.form} onSubmit={this.adicionePost}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="titulo" classes={{ root: classes.root, focused: classes.focused }}>Título</InputLabel>
                            <Input id="titulo" inputProps={{ maxLength: 40 }} name="titulo" autoComplete="titulo" autoFocus classes={{ root: classes.root, focused: classes.focused, underline: classes.underline }} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="resumo" classes={{ root: classes.root, focused: classes.focused }}>Resumo</InputLabel>
                            <Input multiline={true} inputProps={{ maxLength: 300 }} name="resumo" id="resumo" autoComplete="resumo" classes={{ root: classes.root, focused: classes.focused, underline: classes.underline }} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="categoria" classes={{ root: classes.root, focused: classes.focused }}>Categoria</InputLabel>
                            <Input onChange={this.pegueValorCategoria} id="categoria" inputProps={{ maxLength: 40 }} name="categoria" autoComplete="categoria" autoFocus classes={{ root: classes.root, focused: classes.focused, underline: classes.underline }} />
                            <Button className={classes.button} onClick={this.addCategoria} color='primary'>Add Categoria</Button>
                        </FormControl>
                        <EscolhaDeCategorias rows={this.state.rows} />
                        <FormControl margin="normal" required fullWidth classes={{ root: classes.root }}>
                            <Typography component="h6" variant="h6" className={classes.estiloTexto}>
                                Tipo de conteúdo
                            </Typography>
                            <RadioGroup
                                aria-label="Tipo de Conteúdo"
                                name="tipoConteudo"
                                value={this.state.tipoConteudo}
                            >
                                <FormControlLabel
                                    classes={
                                        {
                                            label: classes.label,
                                        }
                                    }
                                    value="texto"
                                    control={<Radio color='primary' classes={{ colorPrimary: classes.radioMarcada, root: classes.root }} onChange={(event) => this.setState({ tipoConteudo: 'texto' })} />}
                                    label="Texto" />
                                <FormControlLabel
                                    classes={
                                        {
                                            label: classes.label,
                                        }
                                    }
                                    value="midia"
                                    control={<Radio color='primary' classes={{ colorPrimary: classes.radioMarcada, root: classes.root }} onChange={(event) => this.setState({ tipoConteudo: 'midia' })} />}
                                    label="Mídia" />
                            </RadioGroup>
                        </FormControl>
                        {
                            this.state.tipoConteudo === 'midia' ?
                                (<div><input
                                    accept="image/*"
                                    className={classes.input}
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                />
                                    <label htmlFor="raised-button-file">
                                        <Button variant="raised" component="span" className={classes.button}>
                                            Upload
                                    </Button>
                                    </label> </div>) :
                                (<FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="conteudoCard" classes={{ root: classes.root, focused: classes.focused }}>Conteúdo</InputLabel>
                                    <Input
                                        multiline={true}
                                        inputProps={{ maxLength: 1000 }}
                                        name="conteudoCard"
                                        id="conteudoCard"
                                        autoComplete="conteudoCard"
                                        rows="10"
                                        classes={{ root: classes.root, underline: classes.underline }} />
                                </FormControl>)
                        }
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            type="submit"
                        >
                            Postar
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

CriarConteudo.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => {
    const postagemAtual = store.posts.postagemAtual;
    const usuarioLogado = store.usuario.usuarioLogado
    return {
        postagemAtual,
        usuarioLogado
    };
};

export default withRouter(
    connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(CriarConteudo))
);