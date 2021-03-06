"""empty message

Revision ID: 62c2747a5145
Revises: 6c30871a9dfa
Create Date: 2019-07-20 22:19:16.217802

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '62c2747a5145'
down_revision = '6c30871a9dfa'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('invoices_products', sa.Column('qty', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'invoices_products', 'products', ['qty'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'invoices_products', type_='foreignkey')
    op.drop_column('invoices_products', 'qty')
    # ### end Alembic commands ###
