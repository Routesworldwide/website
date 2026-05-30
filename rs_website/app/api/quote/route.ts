import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      company,
      email,
      phone,
      shippingType,
      origin,
      destination,
      weight,
      dimensions,
      goodsDescription,
      shippingDate,
      specialRequirements,
      contactMethod,
    } = await request.json();

    // Validate required fields
    if (!name || !email || !shippingType || !origin || !destination || !goodsDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a; border-bottom: 3px solid #c8102e; padding-bottom: 10px;">
            New Shipping Quote Request
          </h2>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #0f172a; margin-bottom: 15px;">Shipper Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Preferred Contact:</strong> ${contactMethod}</p>
          </div>
          
          <div style="margin-top: 20px; background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
            <h3 style="color: #0f172a; margin-top: 0;">Shipment Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 40%;">Shipping Type:</td>
                <td style="padding: 8px 0; color: #374151;">${shippingType}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Origin:</td>
                <td style="padding: 8px 0; color: #374151;">${origin}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Destination:</td>
                <td style="padding: 8px 0; color: #374151;">${destination}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Weight:</td>
                <td style="padding: 8px 0; color: #374151;">${weight ? weight + ' kg' : 'N/A'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Dimensions:</td>
                <td style="padding: 8px 0; color: #374151;">${dimensions || 'N/A'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Shipping Date:</td>
                <td style="padding: 8px 0; color: #374151;">${shippingDate || 'ASAP'}</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #0f172a;">Goods Description</h3>
            <p style="white-space: pre-wrap; color: #374151; background-color: #f9fafb; padding: 10px; border-radius: 4px;">
              ${goodsDescription}
            </p>
          </div>

          ${specialRequirements ? `
            <div style="margin-top: 20px;">
              <h3 style="color: #0f172a;">Special Requirements</h3>
              <p style="white-space: pre-wrap; color: #374151; background-color: #f9fafb; padding: 10px; border-radius: 4px;">
                ${specialRequirements}
              </p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Submitted on: ${new Date().toLocaleString()}</p>
            <p>From: Routes Worldwide Express Quote Request</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Shipping Quote Request - Routes Worldwide Express',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">Quote Request Received</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for requesting a shipping quote from Routes Worldwide Express. We've received your request and our team is reviewing your shipment details.</p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0f172a; margin-top: 0;">Your Quote Summary</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 5px 0;"><strong>Shipping Type:</strong> ${shippingType}</li>
              <li style="padding: 5px 0;"><strong>From:</strong> ${origin}</li>
              <li style="padding: 5px 0;"><strong>To:</strong> ${destination}</li>
              <li style="padding: 5px 0;"><strong>Weight:</strong> ${weight ? weight + ' kg' : 'Not specified'}</li>
              ${shippingDate ? `<li style="padding: 5px 0;"><strong>Preferred Date:</strong> ${shippingDate}</li>` : ''}
            </ul>
          </div>
          
          <p><strong>What's Next?</strong></p>
          <p>Our logistics team will review your shipment details and send you a personalized quote within 24 hours. If we need any additional information, we'll contact you using your preferred method (${contactMethod}).</p>
          
          <p><strong>Typical Quote Includes:</strong></p>
          <ul style="color: #374151; line-height: 1.8;">
            <li>Shipping rates based on current market rates</li>
            <li>Transit time estimates</li>
            <li>Required documentation</li>
            <li>Insurance options</li>
            <li>Special handling requirements</li>
          </ul>
          
          <p style="margin-top: 30px;">If you need immediate assistance, please contact us at:</p>
          <ul style="color: #374151; line-height: 1.8;">
            <li><strong>Phone:</strong> 8796200495</li>
            <li><strong>Email:</strong> routesworldwideexpress@gmail.com</li>
            <li><strong>Hours:</strong> 24/7 Support Available</li>
          </ul>
          
          <p style="margin-top: 30px;">Best regards,<br/><strong>Routes Worldwide Express Team</strong></p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>© Routes Worldwide Express. All rights reserved.</p>
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    });

    console.log('Quote request submission:', {
      name,
      company,
      email,
      shippingType,
      origin,
      destination,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Quote request submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request. Please try again later.' },
      { status: 500 }
    );
  }
}
