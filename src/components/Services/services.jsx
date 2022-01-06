import React, { Component } from "react";

import {
  Container,
  CouseUpService,
  ServiceIcon,
  ServiceSubTitle,
  ServiceSubTitleText,
  ServiceDescription,
  InfantilService,
} from "./styles";

import closeUpImg from "../../assets/clouseup.png";
import infantilImg from "../../assets/infantil.png";

export class Services extends Component {
  render() {
    return (
      <Container>
        <div id="services" className="text-center">
          <div className="container">
            <div className="section-title">
              <h2>Serviços</h2>
            </div>
            <div className="row">
              <div className="grid-template-rows-1">
                <CouseUpService>
                  <div>
                    <ServiceIcon>
                      <img
                        src={closeUpImg}
                        alt="Close-up"
                        style={{ width: 56 }}
                      />
                    </ServiceIcon>
                    <ServiceSubTitle>
                      <ServiceSubTitleText>Close-up</ServiceSubTitleText>
                    </ServiceSubTitle>
                    <ServiceDescription>
                      <h3>
                        <i>O estilo favorito do público.</i>
                      </h3>{" "}
                      <br />
                      Categoria de mágica onde o mágico circula pelo evento
                      interagindo entre os convidados, individualmente ou em
                      grupos, utilizando pequenos objetos do dia a dia e criando
                      ilusões impressionantes a poucos centímetros dos olhos de
                      seus convidados. Uma experiência inesquecível que tornará
                      seu evento único. <br /> <br />
                      <h3>INDICADO</h3>
                      <ul>
                        <li>Crianças acima de 6 anos</li>
                        <li>Entretenimento adulto em festas infantil</li>
                        <li>15 anos</li>
                        <li>Festas de aniversários para todas idades</li>
                        <li>Casamentos</li>
                        <li>Formaturas</li>
                        <li>Empresariais</li>
                      </ul>
                    </ServiceDescription>
                  </div>
                </CouseUpService>

                <InfantilService>
                  <div>
                    <ServiceIcon>
                      <img src={infantilImg} alt="Infantil" />
                    </ServiceIcon>
                    <ServiceSubTitle>
                      <ServiceSubTitleText>Infantil</ServiceSubTitleText>
                    </ServiceSubTitle>
                    <ServiceDescription>
                      <h3>
                        <i>A magia encanta as crianças.</i>
                      </h3>{" "}
                      <br />
                      Um show repleto de magias, diferentes números e muito
                      encantamento com grandes ensinamentos de fábulas, o mágico
                      de frente a um grande público oscila do drama à comédia e
                      interagindo com as crianças convidadas e com as suas
                      ilusões. Assim o mágico entra no mundo da criança e a
                      criação entra no mundo da mágica, criando assim o impacto
                      de uma festa inesquecível... Uma experiência inesquecível
                      que tornará seu evento único. <br /> <br />
                      <h3>INDICADO</h3>
                      <ul>
                        <li>Crianças de até 10 anos.</li>
                        <li>Festa de aniversários.</li>
                        <li>Escolas.</li>
                        <li>Dia das crianças.</li>
                        <li>Eventos.</li>
                      </ul>
                    </ServiceDescription>
                  </div>
                </InfantilService>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Services;
