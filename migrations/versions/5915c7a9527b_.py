"""empty message

Revision ID: 5915c7a9527b
Revises: 3310618b9439
Create Date: 2023-04-21 07:31:42.114441

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5915c7a9527b'
down_revision = '3310618b9439'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.add_column(sa.Column('stock', sa.Integer(), nullable=False))
        batch_op.drop_column('amount')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.add_column(sa.Column('amount', sa.INTEGER(), autoincrement=False, nullable=False))
        batch_op.drop_column('stock')

    # ### end Alembic commands ###
