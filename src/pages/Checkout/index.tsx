import { useState } from 'react'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import { InputGroup, Row, TabButton } from './styles'

import CreditCardImage from '../../assets/images/cartao.png'
import TicketImage from '../../assets/images/boleto.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      comfirmDeliveryEmail: '',
      cardWoner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expireMonth: '',
      expireYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(15, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('O campo é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>

              <input
                id="cpf"
                type="text"
                name="cpf"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cpf}
              />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                id="deliveryEmail"
                type="email"
                name="deliveryEmail"
                value={form.values.deliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="comfirmDeliveryEmail">Confirme o e-mail</label>
              <input
                id="comfirmDeliveryEmail"
                type="email"
                name="comfirmDeliveryEmail"
                value={form.values.comfirmDeliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <div>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={TicketImage} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={CreditCardImage} alt="Cartão de crédito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardWoner">Nome do titular do cartão</label>
                    <input
                      id="cardWoner"
                      type="text"
                      name="cardWoner"
                      value={form.values.cardWoner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input
                      id="cpfCardOwner"
                      type="text"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      id="cardDisplayName"
                      type="text"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expireMonth">Mês de vencimento</label>
                    <input
                      id="expireMonth"
                      type="text"
                      name="expireMonth"
                      value={form.values.expireMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expireYear">Ano de vencimento</label>
                    <input
                      id="expireYear"
                      type="text"
                      name="expireYear"
                      value={form.values.expireYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      name="installments"
                      id="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    >
                      <option value="">1x de 200,00</option>
                      <option value="">2x de 200,00</option>
                      <option value="">3x de 200,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </div>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar a compra
      </Button>
    </form>
  )
}

export default Checkout
