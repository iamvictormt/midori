import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { nome, empresa, mensagem } = await request.json();

    if (!nome || !empresa || !mensagem) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>',
        to: 'contato@midoricollab.com.br',
        subject: `Nova mensagem de ${nome} - ${empresa}`,
        html: `
          <h2>Nova mensagem do seu site</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${mensagem}</p>
        `,
      }),
    });

    const data = await resendResponse.json();
    console.log('Resend API resposta:', resendResponse.status, data);

    if (!resendResponse.ok) {
      return NextResponse.json({ error: 'Falha ao enviar email', detalhes: data }, { status: resendResponse.status });
    }

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar mensagem:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
